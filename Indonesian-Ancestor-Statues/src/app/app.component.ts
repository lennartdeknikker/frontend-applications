import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    locations = [];
    title = "Indonesian Ancestor Figurines"
    url = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-29/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0A%0D%0ASELECT+%3Flocation+%28COUNT%28%3Flocation%29+AS+%3FamountOfStatues%29+WHERE+%7B%0D%0A+++%09%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Anarrower*+%3Fplace+.%0D%0A+++%09%3Fplace+skos%3AprefLabel+%3Flocation+.%0D%0A%0D%0A++VALUES+%3Ftype+%7B+%22Voorouderbeelden%22+%22Voorouderbeeld%22+%22voorouderbeelden%22+%22voorouderbeeld%22+%7D%0D%0A++%0D%0A++%09%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A++++++++dc%3Atype+%3Ftype+%3B%0D%0A++++++++dc%3Atitle+%3Ftitle+%3B%0D%0A++++++++dc%3Adescription+%3Fdescription+%3B%0D%0A++++++++dct%3Aextent+%3Fextent+%3B%0D%0A++++++%09dct%3Acreated+%3FcreationDate+%3B%0D%0A++%09%09edm%3AisShownBy+%3FimageLink+.%0D%0AFILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0AORDER+BY+DESC%28%3FamountOfStatues%29%0D%0A%23+LIMIT+...%E2%80%83&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`

    constructor(private http: HttpClient) {
        this.http.get(this.url).subscribe(response=> {
          let allData = []
          const responseData = response;
          allData.push(responseData);
          allData[0].results.bindings.forEach(object => {
            this.locations.push(object.location.value);            
          });
        })      
    }

}

