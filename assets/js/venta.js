const propiedades = {
    venta: [
      {
        titulo: "Apartamento de lujo en zona exclusiva",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4,
        precio: 5000,
        fumar: false,
        mascotas: false,
        img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
      },
      {
        titulo: "Apartamento acogedor en la montaña",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        banos: 1,
        precio: 1200,
        fumar: true,
        mascotas: true,
        img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"
      },
      {
        titulo: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        fumar: false,
        mascotas: true,
        img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"
      },
      {
        titulo: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        fumar: false,
        mascotas: true,
        img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlubW92aWxpYXJpYXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        titulo: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        fumar: false,
        mascotas: true,
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        titulo: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        fumar: false,
        mascotas: true,
        img: "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5tb3ZpbGlhcmlhfGVufDB8fDB8fHww"
      }
    ],
    alquiler: []
  };
  
  function renderPropiedades(propiedades, tipo) {
    const contenedor = document.getElementById(`propiedades-${tipo}`);
    contenedor.innerHTML = '';
  
    propiedades.forEach(prop => {
      const propiedadHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${prop.img}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
              <h5 class="card-title">${prop.titulo}</h5>
              <p class="card-text">${prop.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${prop.direccion}</p>
              <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.banos} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${prop.precio}</p>
              <p class="${prop.fumar ? 'text-success' : 'text-danger'}"><i class="fas ${prop.fumar ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${prop.fumar ? 'Permitido fumar' : 'No se permite fumar'}</p>
              <p class="${prop.mascotas ? 'text-success' : 'text-danger'}"><i class="fas ${prop.mascotas ? 'fa-paw' : 'fa-ban'}"></i> ${prop.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>
          </div>
        </div>
      `;
      contenedor.insertAdjacentHTML('beforeend', propiedadHTML);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderPropiedades(propiedades.venta, 'venta');
    renderPropiedades(propiedades.alquiler, 'alquiler');
  });
  