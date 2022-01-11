import React from 'react';

const InnerBanner = () => {
  return (
    <div className='container mb-3'>
      <div className='row'>
        <h4 style={{ textAlign: 'center', marginTop: '30px' }}>Feel the <span style={{ color: '#E50081', fontWeight: 600, fontSize: '30px' }}>nature</span> and feel the <span style={{ color: '#E50081', fontWeight: 600, fontSize: '30px' }}>Life</span></h4>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="https://www.worldluxuryassociation.org/wp-content/uploads/2016/09/yourstory-tiger-sunderbans-620x400@2x.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sundorban </h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/5645157_Bangladeshi%20Beaach%20Resort-UNB.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://hotelsbooking.com.bd/wp-content/uploads/2019/12/Srimangal-e1576911028311-870x500.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default InnerBanner;