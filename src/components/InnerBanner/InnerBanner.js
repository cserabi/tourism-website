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
                <p class="card-text">Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/5645157_Bangladeshi%20Beaach%20Resort-UNB.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sea Beach</h5>
                <p class="card-text">Cox's Bazar, the most attractive tourist spots for Bangladesh and not only for Bangladesh it's the longest sea beach in the world .
                  Seventy-five miles (120 Kilo miters sandy sea beach with a gentle slop).</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://hotelsbooking.com.bd/wp-content/uploads/2019/12/Srimangal-e1576911028311-870x500.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Tea Garden</h5>
                <p class="card-text">Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh. It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south. Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://thumbs.dreamstime.com/b/beautiful-view-chera-dwip-bangladesh-crystal-clear-seawater-rocks-sun-group-up-to-create-scenery-amazing-scenic-site-242724575.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Martin's Island</h5>
                <p class="card-text">St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. One of the most beautiful island in the world.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default InnerBanner;