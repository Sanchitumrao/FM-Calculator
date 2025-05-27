
        document.querySelector('.calculator').addEventListener('submit', function(event) {
            event.preventDefault();
            const amount = parseFloat(document.getElementById('Amount').value);
            let result = document.getElementById('result');
            if (isNaN(amount) || amount <= 0) {
                result.textContent = 'Please enter a valid amount.';
                return;
            }
            let Needs, Wants, Investments, MutualFunds, Stocks, DigitalGold, FD, DebtFunds;
           
            if (amount <= 50000) {
             Needs = (amount * 0.5).toFixed(2);
             Wants = (amount * 0.3).toFixed(2);
             Investments = (amount * 0.2).toFixed(2);
             MutualFunds = (Investments * 0.45).toFixed(2);
             Stocks = (Investments * 0.15).toFixed(2);
             DigitalGold = (Investments * 0.05).toFixed(2);
             FD= (Investments * 0.1).toFixed(2);
             DebtFunds= (Investments * 0.25).toFixed(2);
        
            }
            else if (amount > 50000 && amount <= 75000) {
             Needs = (amount * 0.5).toFixed(2);
             Wants = (amount * 0.2).toFixed(2);
             Investments = (amount * 0.3).toFixed(2);
             MutualFunds = (Investments * 0.5).toFixed(2);
             Stocks = (Investments * 0.125).toFixed(2);
             DigitalGold = (Investments * 0.0625).toFixed(2);
             FD = (Investments * 0.0625).toFixed(2);
             DebtFunds = (Investments * 0.25).toFixed(2);
             }
             else if (amount > 75000 ){
             Needs = (amount * 0.45).toFixed(2);
             Wants = (amount * 0.2).toFixed(2);
             Investments = (amount * 0.35).toFixed(2);
             MutualFunds = (Investments * 0.6).toFixed(2);
             Stocks = (Investments * 0.125).toFixed(2);
             DigitalGold = (Investments * 0.0625).toFixed(2);
             FD = (Investments * 0.0625).toFixed(2);
             DebtFunds = (Investments * 0.15).toFixed(2);
             } 
              result.innerHTML = `
                <h2>Best Financial Decision for ${amount}:</h2>
                <p>Needs: ${Needs}</p>
                <p>Wants: ${Wants}</p>
                <p>Investments: ${Investments}</p>
                <h2>Investment Breakdown:</h2>
                <p>Mutual Funds: ${MutualFunds}</p>
                <p>Debt Funds: ${DebtFunds}</p>
                <p>Stocks: ${Stocks}</p>
                <p>Fixed Deposit: ${FD}</p>
                <p>Digital Gold or Gold Funds: ${DigitalGold}</p>
            `;


            if (amount <= 5000) {
                result.innerHTML = '<p style="color: red;">Note: Your income is less than 5000 you can only fullfill your basic needs</p>';
            }

        });

        document.getElementById('year').textContent = new Date().getFullYear();