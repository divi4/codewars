// Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    numbers = numbers.join("").match(/\d{3}/g).concat(numbers[numbers.length - 1])

    phone = {}
    for(let i = 0; i < numbers.length; i++) {
        phone[i] = numbers[i]
    }

    return `(${phone[0]}) ${phone[1]}-${phone[2] + phone[3]}`

}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// Expected: "(123) 456-7890"
