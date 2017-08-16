import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate{
    canDeactivate(): Observable<boolean> | boolean;
}

export class PostDataGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate){
        return component.canDeactivate ? component.canDeactivate(): true;
    }
}