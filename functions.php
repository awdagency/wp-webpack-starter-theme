<?php

function template_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'template_setup' );

/**
 * Enqueue scripts and styles.
 */
function template_scripts() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/dist/css/bundle.css' );

    wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), false, true );

	wp_register_script( 'TweenMax', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', null, null, true );
	wp_enqueue_script('TweenMax');

}
add_action( 'wp_enqueue_scripts', 'template_scripts' );


show_admin_bar(false);

require get_template_directory() . '/include/custom_functions.php';
// require get_template_directory() . '/include/mails.php';
// require get_template_directory() . '/include/admin_functions.php';
// require get_template_directory() . '/include/walker_menu.php';

add_image_size( 'image-10', 10 );
add_image_size( 'image-20', 20 );
add_image_size( 'image-300', 300 );
add_image_size( 'image-600', 600 );
add_image_size( 'image-800', 800 );
add_image_size( 'image-960', 960 );
add_image_size( 'image-1280', 1280 );
add_image_size( 'image-1440', 1440 );
add_image_size( 'image-1920', 1920 );
