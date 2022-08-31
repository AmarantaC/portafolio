(function () {
	
    /*=====================================================
    =            Objeto con propiedades de Tab            =
    =====================================================*/
    
    let ptab = {
    
        primer_encabezado: document.getElementById('menu').firstElementChild,
        primer_contenido: document.getElementById('contenido_info').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('#menu div a'),
        li_encabezados: document.querySelectorAll('#menu div'),
        divs_contenido: document.querySelectorAll('#contenido_info > div'),
        contenido_activo: null
    
    }
    
    /*=====================================================
    =            Objeto con métodos de Tab            =
    =====================================================*/
    
    let mtab = {
    
        inicio: function () {
            ptab.primer_encabezado.className = 'active';
            ptab.primer_contenido.className = 'active';
            for (let i = 0; i < ptab.enlaces_encabezado.length; i++) {
                ptab.enlaces_encabezado[i].addEventListener('click', mtab.evento);
            }
        },
    
        evento: function(e){
            e.preventDefault();
            for (let i = 0; i < ptab.li_encabezados.length; i++) {
                ptab.li_encabezados[i].className = '';
            }
    
            for (let i = 0; i < ptab.divs_contenido.length; i++) {
                ptab.divs_contenido[i].className = '';
            }
    
            this.parentElement.className = 'active';
            ptab.contenido_activo = this.getAttribute('href');
            document.querySelector(ptab.contenido_activo).className = 'active';
            document.querySelector(ptab.contenido_activo).style.opacity = 0;
            setTimeout(function() {
                document.querySelector(ptab.contenido_activo).style.opacity = 1;
            }, 100);
        }
    
    }
    
    mtab.inicio();
        
}())