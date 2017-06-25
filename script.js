// Enough Handson - RxJS
// Part 7

console.log('----------RxJS: Transform Operators : ConcatMap, MergeMap & SwitchMap (with variations)-------------');

// ConcatMap : Map values to inner observable, subscribe and emit value "in order"
// ConcatMap : Maps each value to an Observable, then flattens all of these inner Observables using concatAll.

const click$ = Rx.Observable.fromEvent(document, 'click');

const result$ = click$.concatMap( ev => Rx.Observable.interval(2000));

result$.subscribe( x =>  console.log(x));


// MergeMap : Map values to inner observable, subscribe and emit value "as they appear"