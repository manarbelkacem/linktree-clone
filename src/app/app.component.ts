import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LinkType, ProfileType} from "./profile.type";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linktree-clone';

  profile :ProfileType= {
    name:'Jane Doe',
    username:'@janedoe',
    bio:'Passionate about technology and its potential to transform lives.',
    picture:'https://api.multiavatar.com/68204b123944441adb.png',
    links:[
      {
        value: "https://www.instagram.com/yourprofile",
        title: "Instagram",
        icon: "bi bi-instagram",
        bgColor: "#E4405F", // Instagram gradient pink
      },
      {
        value: "https://www.linkedin.com/in/yourprofile",
        title: "LinkedIn",
        icon: "bi bi-linkedin",
        bgColor: "#0A66C2", // LinkedIn blue
      },
      {
        value: "https://www.github.com/yourprofile",
        title: "GitHub",
        icon: "bi bi-github",
        bgColor: "#333", // GitHub dark grey
      },
      {
        value: "https://www.youtube.com/c/yourchannel",
        title: "YouTube",
        icon: "bi bi-youtube",
        bgColor: "#FF0000", // YouTube red
      },
      {
        value: "https://www.twitter.com/yourprofile",
        title: "Twitter",
        icon: "bi bi-twitter",
        bgColor: "#1DA1F2", // Twitter blue
      },
      {
        value: "https://www.whatsapp.com/send?phone=yourphonenumber",
        title: "WhatsApp",
        icon: "bi bi-whatsapp",
        bgColor: "#25D366", // WhatsApp green
      },
      {
        value: "https://www.reddit.com/user/yourprofile",
        title: "Reddit",
        icon: "bi bi-reddit",
        bgColor: "#FF4500", // Reddit orange
      },
      {
        value: "https://www.facebook.com/yourprofile",
        title: "Facebook",
        icon: "bi bi-facebook",
        bgColor: "#1877F2", // Facebook blue
      },
      {
        value: "https://www.tiktok.com/@yourprofile",
        title: "TikTok",
        icon: "bi bi-tiktok",
        bgColor: "#010101", // TikTok black
      },
      {
        value: "https://www.pinterest.com/yourprofile",
        title: "Pinterest",
        icon: "bi bi-pinterest",
        bgColor: "#E60023", // Pinterest red
      },
      {
        value: "https://t.me/yourprofile",
        title: "Telegram",
        icon: "bi bi-telegram",
        bgColor: "#0088CC", // Telegram blue
      },
    ]
  }
}
