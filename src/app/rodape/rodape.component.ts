import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const btnTopo = document.getElementById('btnTopo');
    if (window.pageYOffset > 20) {
      btnTopo!.style.display = 'block';
    } else {
      btnTopo!.style.display = 'none';
    }
  }

  topo() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
