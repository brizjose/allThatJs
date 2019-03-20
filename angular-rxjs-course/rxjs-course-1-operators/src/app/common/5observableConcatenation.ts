import { of, Observable } from 'rxjs';
import { concat, tap } from 'rxjs/operators';

const stream1$: Observable<number> = of(1, 2, 3);
const stream2$: Observable<number> = of(4, 5, 6);
const stream3$: Observable<number> = of(7, 8, 9);
const result$ = concat(stream1$, stream2$, stream3$);
