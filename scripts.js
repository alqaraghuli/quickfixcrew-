document.getElementById('jobForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const jobData = {
    name: document.getElementById('name').value,
    service: document.getElementById('service').value,
    location: document.getElementById('location').value,
    details: document.getElementById('details').value,
    timestamp: new Date().toISOString()
  };

  try {
    // Replace this with real Firebase Firestore code later
    console.log('Job posted:', jobData);

    // Placeholder feedback
    document.getElementById('message').textContent = '✅ Job submitted successfully!';
    document.getElementById('jobForm').reset();
  } catch (err) {
    document.getElementById('message').textContent = '❌ Failed to submit job.';
    console.error(err);
  }
});
