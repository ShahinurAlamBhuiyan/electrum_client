const All_JOB_REQUEST = {
  method: 'GET',
  url: `${import.meta.env.VITE_RAPID_API}`,
  params: {
    query: 'Electrical',
    location: 'United States',
    distance: '1.0',
    language: 'en_GB',
    remoteOnly: 'false',
    datePosted: 'month',
    employmentTypes: 'fulltime;parttime;intern;contractor',
    index: '0'
  },
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
    'X-RapidAPI-Host': `${import.meta.env.VITE_API_HOST}`
  }
}

export default All_JOB_REQUEST
