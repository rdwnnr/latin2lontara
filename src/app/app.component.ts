import { Component, Injectable } from '@angular/core';
import LontaraRule from './lontara-rules.json';
import { TranslitRuleItem, TranslitService } from '@dagonmetric/ng-translit';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lat2lon translit';
  latinInput!: string;
  lontaraOutput!: string;

  constructor(private readonly translitService: TranslitService) { }

  onSubmit() {
    const lat2lon: TranslitRuleItem[] = LontaraRule;

    this.translitService.translit(this.latinInput.toLowerCase(), 'latin2lontara', lat2lon)
      .subscribe((result) => {
        this.lontaraOutput = result.outputText
          .replace(/[^ᨀ-᨟0-9\s]/gi, '');
      });
  }
}
