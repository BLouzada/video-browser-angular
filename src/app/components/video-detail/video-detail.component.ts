import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: []
})
export class VideoDetailComponent {

  @Input() video: any;
  url: SafeResourceUrl

  constructor( private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges){
    this.video = changes['video'].currentValue
    if(this.video){
      const videoId = this.video.id.videoId;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  }

}
