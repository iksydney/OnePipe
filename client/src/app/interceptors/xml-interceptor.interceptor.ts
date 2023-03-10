import { map, tap, filter } from 'rxjs/operators';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import * as fastXmlParser from 'fast-xml-parser';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';

export interface XMLParser {
  parse: any;
  validate: any;
}

export const XmlParser = new InjectionToken('xml2js', {
  providedIn: 'root',
  factory: () => ({ parse: fastXmlParser.XMLParser, validate: fastXmlParser.XMLValidator }),
});

@Injectable()
export class XmlInterceptor implements HttpInterceptor {
  constructor(@Inject(XmlParser) private xml: XMLParser) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // extend server response observable with logging
    return next.handle(req)
    .pipe(
      tap({
        next: (event) => (console.log(event)),
        error: (error) => (console.log(error))
      })
      // proceed when there is a response; ignore other events
      //filter((event => event instanceof HttpResponse),
      // filter(event  => event instanceof HttpResponse),
      // map(
      //   (event: HttpResponse<any>) => {
      //     console.log(event)
      //     if (this.xml.validate(event.body) !== true) {
      //       // only parse xml response, pass all other responses to other interceptors
      //       return event;
      //     }

      //     // {responseType: text} expects a string response
      //     return event.clone({ body: JSON.stringify(this.xml.parse(event.body)) });
      //   }
      //   // Operation failed; error is an HttpErrorResponse
      // )
    );
  }
}