import Rx from 'rxjs';

const button = document.querySelector('.button');
const label = document.querySelector('h4');

const clickStream = Rx.Observable.fromEvent(button, 'click');
const doubleClickStream = clickStream
  .bufferWhen(() => {
    return clickStream.debounceTime(250);
  })
  .filter((arr) => {
    console.log(arr);
    return arr.length === 2;
  });

doubleClickStream.subscribe((event) => {
  label.textContent = 'double click';
});

doubleClickStream
  .delay(1000)
  .subscribe((suggestion) => {
    label.textContent = '-';
  });

// const clickStream = Rx.Observable.fromEvent(button, 'click');

// const doubleClickStream = clickStream
//      .buffer((data) => {
//        console.log(data)
//        clickStream.throttle(1000)
//      })
//      .map((arr) => {
//        console.log(arr);
//        return arr.length;
//      })
//      .filter(len => len === 2)

// doubleClickStream.subscribe((event) => {
//   console.log('double Click', event);
// })


// const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input')
// input
//   //.filter(event => event.target.value.length > 1)
//   .map(event => event.target.value)
//   .throttleTime(300)
//   //.debounceTime(500)
//   //.distinctUntilChanged()
//   .subscribe(value => console.log(value));

// const source = Rx.Observable.range(0, 3).map((x, idx, obs) => {
//   return x * x;
// });

// const subscription = source.subscribe(
//   (x) => {
//     console.log(`Next: ${x}`);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   },
//   () => {
//     console.log('Completed');
//   });
