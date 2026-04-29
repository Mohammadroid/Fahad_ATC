# Credits

## 3D Models

The following glTF airliner models are bundled in `public/models/` under the **Creative Commons Attribution 3.0** license (CC-BY 3.0). Source: [Poly Pizza](https://poly.pizza/).

| File | Type | Author | Source | License |
|---|---|---|---|---|
| `b747.glb` | Boeing 747 (4-engine wide-body) | **Miha Lunar** | [poly.pizza/m/49CLof4tP2V](https://poly.pizza/m/49CLof4tP2V) | CC-BY 3.0 |
| `b787.glb` | Boeing 787-8 | **Poly by Google** | [poly.pizza/m/fzIXe2paBN9](https://poly.pizza/m/fzIXe2paBN9) | CC-BY 3.0 |
| `airliner_gear.glb` | Generic airliner with landing gear (narrow-body fallback) | **Poly by Google** | [poly.pizza/m/0ZVPPr6X6gM](https://poly.pizza/m/0ZVPPr6X6gM) | CC-BY 3.0 |
| `airliner_detail.glb` | Detailed generic airliner (wide-body fallback) | **Poly by Google** | [poly.pizza/m/a3XrQkLNna9](https://poly.pizza/m/a3XrQkLNna9) | CC-BY 3.0 |

Models are scaled at runtime to match real ICAO-type dimensions and tinted with airline-livery body colours. Per-airline detail liveries (full painted markings) are not applied — adding them would require purpose-built textures per airline-type combination.

## Airport Geometry

`public/data/okbk_osm.json` is © **OpenStreetMap contributors**, licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/). Fetched via the [Overpass API](https://overpass-api.de/).

## Satellite Imagery

`public/data/okbk_satellite.jpg` is from **Esri World Imagery** via the ArcGIS Online REST endpoint. Free for non-commercial / research use with attribution.

> Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community

For commercial deployment, use a licensed Esri ArcGIS account or another provider (Mapbox, MapTiler, Google Maps Platform).

## Code

Project source code is unlicensed — see repository root for terms when added.
