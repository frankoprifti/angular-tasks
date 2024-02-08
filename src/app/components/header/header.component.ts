import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  showAddTask: boolean = false;
  subscription?: Subscription;



  constructor(private ui: UiService) {
    this.subscription = this.ui.onToggle().subscribe(val => this.showAddTask = val)
  }

  ngOnInit(): void {

  }
  onHeaderButtonClick(): void {
    this.ui.toggleAddTask()
    // this.ui.onToggle().subscribe(val => console.log(val))
  }
}
