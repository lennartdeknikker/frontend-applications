import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statue } from '../statue';
import { STATUES } from '../mock-statues';

@Component({
  selector: 'app-statue-list',
  templateUrl: './statue-list.component.html',
  styleUrls: ['./statue-list.component.scss']
})
export class StatueListComponent implements OnInit {
  url = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-29/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+hdlh%3A+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster%3E%0D%0A%0D%0ASELECT+%3FplaceName+%3Ftitle++%3Fdescription+%3Fextent+%3FcreationDate+%3FimageLink+WHERE+%7B%0D%0A+++%09%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Anarrower*+%3Fplace+.%0D%0A+++%09%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A%0D%0A++VALUES+%3Ftype+%7B+%22Voorouderbeelden%22+%22Voorouderbeeld%22+%22voorouderbeelden%22+%22voorouderbeeld%22+%7D%0D%0A++%0D%0A++%09%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A++++++++dc%3Atype+%3Ftype+%3B%0D%0A++++++++dc%3Atitle+%3Ftitle+%3B%0D%0A++++++++dc%3Adescription+%3Fdescription+%3B%0D%0A++++++++dct%3Aextent+%3Fextent+%3B%0D%0A++++++%09dct%3Acreated+%3FcreationDate+%3B%0D%0A++%09%09edm%3AisShownBy+%3FimageLink+.%0D%0A++%23+FILTER%28REGEX%28%3FplaceName%2C+%22Lakor%22%29%29+%23+filteropties%3A+Nias%2C+Leti%2C+Yamdena%2C+Unir%2C+Kai%2C+Tranimbar%2C+Pomats%2C+Maluku%2C+Belu%2C+Atjametsj%2C+Lakor%2C+Alor%2C+Sumatera%0D%0A+++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
    

  @Input("location") selectedLocation : string;

  statues = [];
  selectedStatue: Statue;

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response=> {
      const responseData = response;
      let allData = [];
      allData.push(responseData);
      allData[0].results.bindings.forEach(object => {
          this.statues.push(object);
      });
      console.log(this.statues);
    })}

  ngOnInit() {
  }

  onSelect(statue: Statue): void {
    this.selectedStatue = statue;
  }

}
