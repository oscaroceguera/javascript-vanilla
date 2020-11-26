
const btn5 = document.getElementById('btn5')

const nums = [1, 2, 3, 6, 9, 8, 7, 4]
const ids = [1, 2, 3, 6, 9, 8, 7, 4]

btn5.addEventListener('click', function () {
  console.log('se dio click')
  nums.unshift(nums.pop())
  console.log(nums)
  for (let i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i]
  }
})
