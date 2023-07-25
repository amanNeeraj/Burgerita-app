import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Replace 'VIDEO_URL_HERE' with the actual URL of the online video
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/external/406525280.sd.mp4?s=f106de57b007210706710b0a32a208c10c9c8fc2&profile_id=164&oauth2_token_id=57447761');
  }
}
