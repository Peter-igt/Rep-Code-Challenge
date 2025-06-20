document.getElementById('fruit-form').addEventListener('submit', e => {
    e.preventDefault();
    const fruits = Number(document.getElementById('number-of-fruits').value);
    const baseCost = fruits * 20;
    const discount = fruits >= 5 ? baseCost * 0.1 : 0;
    const finalCost = baseCost - discount;
    document.getElementById('result').innerHTML = `
        <h2>Matunda Yako:</h2>
        <p>Fruits: ${fruits}</p>
        <p>Base: KES ${baseCost}</p>
        <p>${fruits >= 5 ? `Discount (10%): KES ${discount}` : 'No Discount'}</p>
        <p>Total: KES ${finalCost}</p>
        <p><strong>Asante!</strong></p>
    `;
});