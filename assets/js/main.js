<section class="pj-gallery">
    {% if gallery.images.size > 1 %}
    <button class="pj-gallery-button pj-gallery-button-previous">
      {% include svg/icon-arrow_left.liquid
        class="pj-gallery-icon pj-gallery-icon-left"
        alt=t_gallery_previous %}
    </button>

    <button class="pj-gallery-button pj-gallery-button-next">
      {% include svg/icon-arrow_right.liquid
        class="pj-gallery-icon pj-gallery-icon-right"
        alt=t_gallery_next %}
    </button> {% endif %}

    <div class="pj-gallery-images">
        {% for image in gallery.images %}
        <div class="pj-gallery-image-container">
            <figure class="pj-gallery-image">
                <img src="{{ image.path | relative_url }}" alt="{{ image.alt }}">
                <figcaption>{{ image.credits }}</figcaption>
            </figure>
        </div>
        {% endfor %}
    </div>
</section>