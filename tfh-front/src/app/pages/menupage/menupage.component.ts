import { Component, OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'tfh-menu',
  imports: [FooterComponent],
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenuComponent implements OnInit {
  currentLocation: number = 1;
  numOfPapers: number = 3;
  maxLocation: number = this.numOfPapers + 1;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  openBook(): void {
    const book = document.querySelector("#book") as HTMLElement;
    const prevBtn = document.querySelector("#prev-btn") as HTMLElement;
    const nextBtn = document.querySelector("#next-btn") as HTMLElement;
    
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
  }

  closeBook(isAtBeginning: boolean): void {
    const book = document.querySelector("#book") as HTMLElement;
    const prevBtn = document.querySelector("#prev-btn") as HTMLElement;
    const nextBtn = document.querySelector("#next-btn") as HTMLElement;
    
    if (isAtBeginning) {
      book.style.transform = "translateX(0%)";
    } else {
      book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
  }

  goNextPage(): void {
    if (this.currentLocation < this.maxLocation) {
      switch (this.currentLocation) {
        case 1:
          this.openBook();
          const paper1 = document.querySelector("#p1") as HTMLElement;
          paper1.classList.add("flipped");
          paper1.style.zIndex = '1';
          break;
        case 2:
          const paper2 = document.querySelector("#p2") as HTMLElement;
          paper2.classList.add("flipped");
          paper2.style.zIndex = '2';
          break;
        case 3:
          const paper3 = document.querySelector("#p3") as HTMLElement;
          paper3.classList.add("flipped");
          paper3.style.zIndex = '3';
          this.closeBook(false);
          break;
        default:
          throw new Error("Unknown state");
      }
      this.currentLocation++;
    }
  }

  goPrevPage(): void {
    if (this.currentLocation > 1) {
      switch (this.currentLocation) {
        case 2:
          this.closeBook(true);
          const paper1 = document.querySelector("#p1") as HTMLElement;
          paper1.classList.remove("flipped");
          paper1.style.zIndex = '3';
          break;
        case 3:
          const paper2 = document.querySelector("#p2") as HTMLElement;
          paper2.classList.remove("flipped");
          paper2.style.zIndex = '2';
          break;
        case 4:
          this.openBook();
          const paper3 = document.querySelector("#p3") as HTMLElement;
          paper3.classList.remove("flipped");
          paper3.style.zIndex = '1';
          break;
        default:
          throw new Error("Unknown state");
      }
      this.currentLocation--;
    }
  }
}
