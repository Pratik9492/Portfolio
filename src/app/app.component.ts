import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "pratik-portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle(
      "Pratik Nemade | Software Engineer | Front-End Developer"
    );
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "Frontend Developer , Software Engineer, software, developer, Fullstack Deve;oper",
      },
      {
        name: "description",
        content:
          "As a software engineer with expertise in both frontend and backend, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular, as well as back-end technologies such as .Net Core and MySQL.",
      },
    ]);

    AOS.init();
  }
}
