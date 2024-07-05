document.addEventListener('DOMContentLoaded', () => {
    const shopopenContainer = document.getElementById('shopopen');
  
    fetch('https://api.spacexdata.com/v4/shopopen/upcoming')
      .then(response => response.json())
      .then(data => {
        data.forEach(shopopen => {
          const shopopenDate = new Date(shopopen.date_utc).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'UTC'
          });
  
          const html = `
            <div class="shopopen-item">
              <strong>${shopopen.name}</strong>
              <div class="launch-details">
                <div><strong>Date:</strong> ${shopopenDate}</div>
                <div><strong>Differntitem:</strong> ${shopopen.differentitem}</div>
                <div><strong>Discount:</strong> ${shopopen.discount}</div>
              </div>
            </div>
          `;
  
          shopopenContainer.innerHTML += html;
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        shopopenContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
      });
  });