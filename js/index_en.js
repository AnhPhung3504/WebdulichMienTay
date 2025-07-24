const events = {
  '01': [
    {
      title: "Lunar New Year in the Mekong Delta Provinces",
      date: "First Lunar Month",
      image: "../Hình ảnh/Lễ hội/t1/tết -t1.jpg"
    },
    {
      title: "Spring Festival at Sam Mountain – Chau Doc, An Giang",
      date: "10th day of the 1st Lunar Month to end of 3rd Lunar Month",
      image: "../Hình ảnh/Lễ hội/t1/via-ba -AG_ t1.jpg"
    },
    {
      title: "Traditional Chinese New Year - Can Tho, Soc Trang",
      date: "During or after Lunar New Year",
      image: "../Hình ảnh/Lễ hội/t1/doi-net-ve-van-hoa-tet-co-truyen _ Ct &st tháng 1.jpg"
    }
  ],
  '02': [
    {
      title: "Tong Gio Festival (Pithi Sropreah) - Soc Trang, Can Tho",
      date: "End of 2nd Lunar Month",
      image: "../Hình ảnh/Lễ hội/t2/Lễ hội Tống Gió (Pithi Srôpreah) -ct, st.jpg"
    },
    {
      title: "Five Elements Temple Worship Festival - Long An",
      date: "5th–10th day of the 2nd Lunar Month",
      image: "../Hình ảnh/Lễ hội/t2/Mieu-ba-ngu-hanh-le-cau-an _long an.jpeg"
    },
    {
      title: "Nghinh Ong Festival – Cu Lao Dung (Soc Trang)",
      date: "15th–20th day of the 2nd Lunar Month",
      image: "../Hình ảnh/Lễ hội/t2/le_nghinh_ong_soc_trang_11.jpg"
    }
  ],
  '03': [
    {
      title: "Nghinh Ong Festival – Ganh Hao, Bac Lieu",
      date: "15th–20th day of the 4th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t3/Lễ hội Nghinh Ông – Gành Hào, Bạc Liêu.jpg"
    },
    {
      title: "Nghinh Ong Vam Lang Festival - Go Cong Dong District, Tien Giang",
      date: "10th day of the 3rd Lunar Month",
      image: "../Hình ảnh/Lễ hội/t3/Lễ hội Nghinh ông Vàm Láng - Huyện Gò Công Đông - Tiền Giang.webp"
    }
  ],
  '04': [
    {
      title: "Lady Xu Temple Festival (early phase) – Sam Mountain, An Giang",
      date: "4th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t4/via-ba-Chúa Xứ -AG.png"
    },
    {
      title: "Binh Thuy Temple Festival – Can Tho",
      date: "20th–24th day of the 4th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t4/ễ hội đình Bình Thủy – Cần Thơ (20–24 tháng 4)..jpg"
    }
  ],
  '05': [
    {
      title: "Ky Yen Festival at Tan Hung Temple - Ca Mau",
      date: "10th–11th day of the 5th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t5/Lễ kỳ yên đình thần Tân Hưng.png"
    }
  ],
  '06': [
    {
      title: "Ky Yen Festival at An Thanh Temple - Mo Cay Nam District, Ben Tre",
      date: "16th–18th day of the 6th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t6/Lễ hội Kỳ Yên An Thạnh - Huyện Mỏ Cày Nam, Bến Tre.jpg"
    }
  ],
  '07': [
    {
      title: "Vu Lan Festival held across Mekong Delta provinces",
      date: "Full moon of the 7th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t7/lễ vu lan.webp"
    },
    {
      title: "Vu Lan Festival held across Mekong Delta provinces",
      date: "Full moon of the 7th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t7/vu lan.jpg"
    }
  ],
  '08': [
    {
      title: "Mid-Autumn Festival",
      date: "Full moon of the 8th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t8/trung thu.jpg"
    },
    {
      title: "Soc Trang Pia Cake",
      image: "../Hình ảnh/Lễ hội/t8/banh-pia-ngon-1.png"
    }
  ],
  '09': [
    {
      title: "Sen Dolta Festival (Khmer Ancestral Remembrance) – Soc Trang, Tra Vinh",
      date: "August 29 – September 1",
      image: "../Hình ảnh/Lễ hội/t9/Lễ sen Dolta.jpg"
    }
  ],
  '10': [
    {
      title: "Ok Om Bok Festival - Tra Vinh, Soc Trang",
      date: "Mid-10th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t10/Lễ hội Ok Om Bok.jpg"
    },
    {
      title: "Ok Om Bok Festival - Tra Vinh, Soc Trang",
      date: "Mid-10th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t10/Lễ hội Ok Om Bok2.jpg"
    },
    {
      title: "Moon Offering Ceremony during Ok Om Bok Festival",
      date: "Mid-10th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t10/le-hoi-ok-om-bok-5(cúng trăng).jpg"
    }
  ],
  '12': [
    {
      title: "Tet Flower Market – Sa Dec, Can Tho",
      date: "20th day of the 12th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t12/8.-du-khach-tham-lang-hoa_ sa đéc tết.jpg"
    },
    {
      title: "Spring Flower Festival – Floating Tet Market – Cai Rang, Nga Nam",
      date: "20th–25th day of the 12th Lunar Month",
      image: "../Hình ảnh/Lễ hội/t12/sắc xuân chợ nổi.jpg"
    }
  ]
};
let currentIndex = 0;

function filterEvents(month) {
  const gallery = document.getElementById('eventGallery');

  // Fade out + slide left
  gallery.style.opacity = '0';
  gallery.style.transform = 'translateX(-30px)';

  setTimeout(() => {
    // Cập nhật nút active
    document.querySelectorAll('.month-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.month-button[onclick*="${month}"]`).classList.add('active');

    // Load dữ liệu mới
    gallery.innerHTML = '';
    const monthEvents = events[month] || [];

    monthEvents.forEach(event => {
      const item = document.createElement('div');
      item.className = 'event-item';
      item.innerHTML = `
        <img src="${event.image}" alt="${event.title}" />
        <div class="event-caption">
          <span>${event.date}</span>
          <h3>${event.title}</h3>
        </div>
      `;
      gallery.appendChild(item);
    });

    // Fade in + slide về vị trí
    gallery.style.transform = 'translateX(0)';
    gallery.style.opacity = '1';
  }, 300);
}
    // Khởi tạo mặc định tháng 5
    filterEvents('01');


// slide chạy hình
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 5000); // Đổi slide mỗi 5 giây
}

function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}





const imageList = [
    '/Hình ảnh/các tỉnh/Đồng tháp/lang hoa sadec.jpg',   // Trang 1: Bìa trước
    '/Hình ảnh/các tỉnh/Vĩnh Long/lò gach.jpg',   // Trang 2
    '/Hình ảnh/các tỉnh/Sóc Trăng/samrong.jpg',   // Trang 3
    '/Hình ảnh/các tỉnh/Trà Vinh/cù lao Tân Quy.jpg',   // Trang 4
    '/Hình ảnh/các tỉnh/Bến tre/bến tre.jpg',   // Trang 5
    '/Hình ảnh/các tỉnh/Sóc Trăng/samrong.jpg',   // Trang 6
  ];

  const book = document.getElementById('book');
  let pages = [];

  imageList.forEach((img, index) => {
    const page = document.createElement('div');
    page.classList.add('page');
    page.style.backgroundImage = `url('${img}')`;
    page.dataset.index = index;

    // Phân loại vị trí trang
    if (index === 0) {
      page.classList.add('right', 'cover', 'front');
      page.style.left = '300px';
    } else if (index === imageList.length - 1) {
      page.classList.add('left', 'cover', 'back');
      page.style.left = '0';
      page.style.transform = 'rotateY(180deg)';
    } else {
      const isEven = index % 2 === 0;
      page.classList.add(isEven ? 'right' : 'left');
      page.style.left = isEven ? '300px' : '0';
    }

    book.appendChild(page);
    pages.push(page);
  });

  let currentPage = 0;

  document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      const page = pages[currentPage];
      page.style.transform = 'rotateY(-180deg)';
      page.style.zIndex = 100 + currentPage;
      currentPage++;
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      const page = pages[currentPage];
      page.style.transform = 'rotateY(0deg)';
      page.style.zIndex = 100 - currentPage;
    }
  });



