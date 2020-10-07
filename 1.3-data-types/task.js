"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

    let refundAmount = amount - contribution; // тело кредита, то что надо вернуть
    let months; // количество выплачиваемых месяцев
    months = (date.getFullYear() - new Date().getFullYear()) * 12;
    // months -= new Date().getFullYear() + 1;
    // months += date.getFullYear(); 
    let p = percent/100/12; // 1/12 процентной ставки
    let monthlyFee = refundAmount * (p+p/((Math.pow(1+p, months)-1))); // ежемесячный платеж.
    let totalAmount =months * monthlyFee;

    console.log(totalAmount.toFixed(2));
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let greeting;
    if (name == undefined || name == null || name == "") {
        greeting = "Привет, мир! Меня зовут Аноним";
    } else if (name != null) {
        greeting = `Привет, мир! Меня зовут ${name}`
    }
    console.log(greeting);
    return greeting;
}