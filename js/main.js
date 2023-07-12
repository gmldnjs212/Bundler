console.log('Hello Parcel!');

// async function : 비동기 함수
// await : 기다리는
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()