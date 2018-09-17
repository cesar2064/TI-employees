import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class CommonComponent implements OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    ngOnDestroy() {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }
}
