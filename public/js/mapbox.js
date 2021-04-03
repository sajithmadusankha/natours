/* eslint-disable */
export const displayMap = locations => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FqaXRoMDIiLCJhIjoiY2ttdDk3MWdpMHBsNjJybzVyanZ6dG94eSJ9.5SYaDSnrmNcf23A4NY3MLw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/sajith02/ckmt9ubv73t6a17o5pzzd7kks',
        scrollZoom: false
            // center: [-118.113491, 34.111745],
            // zoom: 10,
            // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
                offset: 30
            })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
}