function calculateTotalSales(dailySales) {
    return dailySales.reduce((total, sales) => total + sales, 0);
  }

  function calculateAverageDailySales(dailySales) {
    const totalSales = calculateTotalSales(dailySales);
    return totalSales / dailySales.length;
  }

  function findBestSellingDay(dailySales) {
    const maxSales = Math.max(...dailySales);
    const bestSellingDays = dailySales.reduce((acc, sales, index) => {
      if (sales === maxSales) {
        acc.push(index + 1); 
      }
      return acc;
    }, []);
    return bestSellingDays;
  }

  const sampleSalesData = [120, 180, 200, 150, 220, 300, 250];
  console.log("Total Sales:", calculateTotalSales(sampleSalesData));
  console.log("The average Daily Sales:", calculateAverageDailySales(sampleSalesData));
  console.log("The best Selling Day(s):", findBestSellingDay(sampleSalesData));

  const anotherSalesData = [90, 120, 150, 80, 200, 180, 210];
  console.log("Total Sales:", calculateTotalSales(anotherSalesData));
  console.log("The average Daily Sales:", calculateAverageDailySales(anotherSalesData));
  console.log("The best Selling Day(s):", findBestSellingDay(anotherSalesData));