const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sassf
 | file for the application as well as bundling up all the JS files.
 |
 */


const vendors = 'node_modules/';
const resourcesAssets = 'resources/';
const srcCss = resourcesAssets + 'css/';
const srcJs = resourcesAssets + 'js/';

//destination path configuration
const dest = 'public/';
const destFonts = dest + 'fonts/';
const destCss = dest + 'css/';
const destJs = dest + 'js/';
const destImg = dest + 'img/';
const destImages = dest + 'images/';
const destVendors= dest + 'vendors/';


const paths = {
    'animate': vendors + 'animate.css/',
    'jquery' : vendors + 'jquery/dist/',
    'popperjs': vendors + 'popper.js/dist/umd/',
    'bootstrap': vendors + 'bootstrap/dist/',
    'jvectormap' :vendors + 'bower-jvectormap/',
    'magnify' : vendors + 'bootstrap-magnify/',
    'fontawesome': vendors + 'font-awesome/',
    'flotchart': vendors + 'flotchart/',
    'countupjs': vendors +'countup.js/dist/',
    'dataTables': vendors + 'datatables/media',
    'jquerymockjax' : vendors + 'jquery-mockjax/dist/',
    'fortjs': vendors +'fort.js/',
    'holderjs' : vendors + 'holderjs/',
    'select2': vendors + 'select2/dist/',
    'select2BootstrapTheme': vendors + 'select2-bootstrap-theme/dist/',
    'datetimepicker': vendors + 'eonasdan-bootstrap-datetimepicker/build/',
    'fullcalendar': vendors + 'fullcalendar/dist/',
    'icheck': vendors + 'iCheck/',
    'jasnyBootstrap': vendors + 'jasny-bootstrap/dist/',
    'bootstrapValidator' : vendors + 'bootstrapvalidator/dist/',
    'jqueryui' : vendors + 'jquery-ui/',
    'moment' : vendors + 'moment/',
    'sparkline' : vendors + 'sparkline/src/',
    'jqueryeasypiechart' : vendors + 'bower-jquery-easyPieChart/dist/',
    'datatables' : vendors + 'datatables.net/',
    'datatablesbs4' : vendors + 'datatables.net-bs4/',
    'wow' : vendors + 'wowjs/dist/',
    'raphael' : vendors + 'raphael/',
    'twtrBootstrapWizard': vendors +'twitter-bootstrap-wizard/',
    'sweetalert': vendors + 'sweetalert/',
    'jquery_steps': vendors + 'jquery-steps/',
    'datatablesbuttonsbs4' : vendors + 'datatables.net-buttons-bs4/',
};


//Needed
//moment
mix.copy(paths.moment + 'min/moment.min.js',  destVendors + 'moment/js');

// //Datepicker
//bootstrap-datetimepicker
mix.copy(paths.datetimepicker + 'css/bootstrap-datetimepicker.min.css',  destVendors + 'datetimepicker/css');
mix.copy(paths.datetimepicker + 'js/bootstrap-datetimepicker.min.js',  destVendors + 'datetimepicker/js');


//bower-jquery-easyPieChart
mix.copy(paths.jqueryeasypiechart + 'jquery.easypiechart.min.js',  destVendors + 'bower-jquery-easyPieChart/js');
mix.copy(paths.jqueryeasypiechart + 'easypiechart.min.js',  destVendors + 'bower-jquery-easyPieChart/js');
mix.copy( srcJs + 'pages/jquery.easingpie.js',  destVendors + 'bower-jquery-easyPieChart/js');

// fullcalendar
mix.copy(paths.fullcalendar + 'fullcalendar.css', destVendors + 'fullcalendar/css');
mix.copy(paths.fullcalendar + 'fullcalendar.print.css', destVendors + 'fullcalendar/css');
mix.copy(paths.fullcalendar + 'fullcalendar.min.js', destVendors + 'fullcalendar/js');
//

//flot charts
mix.copy(paths.flotchart + 'jquery.flot.js', destVendors + 'flotchart/js');
mix.copy(paths.flotchart + 'jquery.flot.resize.js', destVendors + 'flotchart/js');
mix.copy(paths.flotchart + 'jquery.flot.categories.js', destVendors + 'flotchart/js');

// // sparkline charts page

mix.copy( srcJs + 'jquery.sparkline.js',  destVendors + 'sparklinecharts');
mix.copy( srcJs + 'jquery.flot.spline.js',  destVendors + 'splinecharts');

// //countUp js
mix.copy(paths.countupjs + 'countUp.js',  destVendors + 'countUp.js/js');

//  bower-jvectormap
mix.copy(paths.jvectormap + 'jquery-jvectormap-1.2.2.css',  destVendors + 'bower-jvectormap/css');
mix.copy(paths.jvectormap + 'jquery-jvectormap-1.2.2.min.js',  destVendors + 'bower-jvectormap/js/jquery-jvectormap-1.2.2.min.js');
mix.copy(paths.jvectormap + 'jquery-jvectormap-world-mill-en.js',  destVendors + 'bower-jvectormap/js/jquery-jvectormap-world-mill-en.js');

// indexpage
mix.copy( srcJs + 'dashboard.js', destJs + 'pages');


mix.copy( srcJs + 'pages/jquery-ui.min.js', destJs + 'pages');

// calendar page
mix.copy( srcCss + 'pages/calendar_custom.css', destCss + 'pages');
mix.copy( srcJs + 'pages/calendar.js', destJs + 'pages');

// animate
mix.copy(paths.animate + 'animate.min.css',  destVendors + 'animate');

mix.copy( srcCss + 'only_dashboard.css', destCss + 'pages');


//jasny-bootstrap
mix.copy(paths.jasnyBootstrap + 'css/jasny-bootstrap.css',  destVendors + 'jasny-bootstrap/css');
mix.copy(paths.jasnyBootstrap + 'js/jasny-bootstrap.js',  destVendors + 'jasny-bootstrap/js');

//datatables
mix.copy(paths.datatables + 'js/jquery.dataTables.js',  destVendors + 'datatables/js');
mix.copy(paths.datatablesbs4 + 'js/dataTables.bootstrap4.js',  destVendors + 'datatables/js');
mix.copy(paths.datatablesbs4 + 'css/dataTables.bootstrap4.css',  destVendors + 'datatables/css');
mix.copy(paths.datatablesbuttonsbs4 + 'css/buttons.bootstrap4.css',  destVendors + 'datatables/css');
mix.copy(paths.datatablesbuttonsbs4 + 'js/buttons.bootstrap4.js',  destVendors + 'datatables/js');


// //imgmagnify
mix.copy(paths.magnify + 'css/bootstrap-magnify.css',  destVendors + 'bootstrap-magnify');
mix.copy(paths.magnify + 'js/bootstrap-magnify.js',  destVendors + 'bootstrap-magnify');

//icheck
mix.copy(paths.icheck + 'icheck.js', destVendors + 'iCheck/js');
mix.copy(paths.icheck + 'skins/', destVendors + 'iCheck/css', false);

//  default layout page


mix.copy( srcJs + 'josh.js', destJs);
mix.copy(paths.raphael + 'raphael.min.js', destJs);
mix.copy(paths.holderjs + 'holder.js', destJs);
mix.copy(paths.holderjs + 'holder.min.js', destJs);

// userprofile page
mix.copy( srcCss + 'pages/user_profile.css', destCss + 'pages');
mix.copy( srcJs + 'pages/user_profile.js', destJs + 'pages');

//select2
mix.copy(paths.select2 + 'css/select2.min.css',  destVendors + 'select2/css');
mix.copy(paths.select2 + 'js/select2.js',  destVendors + 'select2/js');
mix.copy(paths.select2 + 'js/select2.full.js',  destVendors + 'select2/js');

mix.copy(paths.select2BootstrapTheme + 'select2-bootstrap.css',  destVendors + 'select2/css');

mix.copy(paths.twtrBootstrapWizard + 'jquery.bootstrap.wizard.js',  destVendors + 'bootstrapwizard');

// bootstrapvalidator
mix.copy(paths.bootstrapValidator + 'css/bootstrapValidator.min.css',  destVendors + 'bootstrapvalidator/css');
mix.copy(paths.bootstrapValidator + 'js/bootstrapValidator.min.js',  destVendors + 'bootstrapvalidator/js');

// 404 page
mix.copy( srcCss + 'pages/404.css', destCss + 'pages');
mix.copy( srcJs + '404.js', destJs);

// 500 page
mix.copy( srcCss + 'pages/500.css', destCss + 'pages');
//table css
mix.copy( srcCss + 'pages/tables.css', destCss + 'pages');

//frontend forgotpwd js
mix.copy( srcJs + 'frontend/forgotpwd_custom.js', destJs + 'frontend');

//frontned login js
mix.copy( srcJs + 'frontend/login_custom.js', destJs + 'frontend');


// forgot
mix.copy( srcCss + 'frontend/forgot.css', destCss + 'frontend');

//fort.js
mix.copy(paths.fortjs + 'fort.css',  destVendors + 'fort_js/css');
mix.copy(paths.fortjs + 'fort.js',  destVendors + 'fort_js/js');

// login
mix.copy( srcCss + 'frontend/login.css', destCss + 'frontend');

// lockscreen builder
mix.copy( srcCss + 'pages/lockscreen.css', destCss + 'pages');
mix.copy( srcJs + 'lockscreen.js', destJs + 'pages');

mix.copy( srcJs + 'livicons-1.4.min.js', destJs);

//frontned register js
mix.copy( srcJs + 'frontend/register_custom.js', destJs + 'frontend');

// jquery-mockjax
mix.copy(paths.jquerymockjax + 'jquery.mockjax.js',  destVendors + 'jquery-mockjax/js');

mix.copy(paths.fontawesome + 'fonts', destFonts);


//adduser page
mix.copy( srcJs + 'pages/adduser.js', destJs + 'pages');
mix.copy( srcJs + 'pages/edituser.js', destJs + 'pages');
mix.copy( srcCss + 'pages/wizard.css', destCss + 'pages');

//Copy images straight to public
mix.copy(paths.jqueryui + 'themes/base/images', destImg);
mix.copy(resourcesAssets + 'img', destImg, false);
mix.copy(resourcesAssets + 'img/authors', destImg + '/authors');
mix.copy(resourcesAssets + 'images', destImages, false);
mix.copy(resourcesAssets + 'images/authors', destImages + '/authors');


mix.copy(paths.bootstrap + 'css/bootstrap.min.css',  destCss);
mix.copy(paths.bootstrap + 'js/bootstrap.min.js',  destJs);


mix.copy( srcCss + 'pages/login.css', destCss + 'pages');
mix.copy( srcJs + 'pages/login.js', destJs + 'pages');




// register
mix.copy( srcCss + 'frontend/register.css', destCss + 'frontend');
mix.copy( srcJs + 'jquery.min.js', destJs);


// Custom Styles
// // wow
mix.copy(paths.wow + 'wow.min.js',  destVendors + 'wow/js');
// // Custom Styles

//sweetalert
mix.copy(srcCss + 'pages/sweetalert.css', destCss + 'pages');
mix.copy(paths.sweetalert + 'dist/sweetalert.min.js', destVendors + 'sweetalert/js');
mix.copy(srcJs + 'pages/sweetalert.dev.js', destJs + 'pages');

//jquery-steps
mix.copy(paths.jquery_steps + 'demo/css/jquery.steps.css', destVendors + 'jquery_steps/css');
mix.copy(paths.jquery_steps + 'build/jquery.steps.min.js', destVendors + 'jquery_steps/js');

mix.copy(srcJs + 'pluginjs/validate.js', destJs + 'pluginjs');

//gui builder
mix.copy(srcCss + 'pages/custom_gui_builder.css', destCss + 'pages');
mix.copy(srcJs + 'pages/custom_gui_builder.js', destJs + 'pages');

// /* bootstrap4 conversion css*/
mix.copy(srcCss+'custom.css',destCss+ 'custom.css');
mix.copy(srcCss+'pages/news.css',destCss+ 'pages/news.css');

mix.sass(resourcesAssets + 'sass/bootstrap.scss',destCss);

//css section
// Custom Styles
//black color scheme
mix.combine(
    [
        destCss + 'bootstrap.css',
        // srcCss + 'bootstrap.min.css',
        srcCss + 'font-awesome.min.css',
        srcCss + 'black.css',
        srcCss + 'panel.css',
        srcCss + 'metisMenu.css',
        destCss + 'custom.css',
        srcCss + 'pages/custom.css'

        // srcCss + 'pages/fixedmenu.css'
    ], destCss + 'app.css');


/*frontend css mix*/
/*default skin*/
mix.combine(
    [
        // srcCss + 'fonts.css',
        destCss +  'bootstrap.css',
        srcCss +  'font-awesome.min.css',
        srcCss +  'frontend/custom.css',
        destCss + 'custom.css'
    ], destCss + 'lib.css');

// all global js files into app.js
mix.combine(
    [
        paths.jquery + 'jquery.min.js',
        srcJs + 'pages/jquery-ui.min.js',
        paths.popperjs + 'popper.min.js',
        paths.bootstrap + 'js/bootstrap.min.js',
        vendors + 'raphael/raphael.min.js',
        srcJs + 'livicons-1.4.min.js',
        srcJs + 'metisMenu.js',
        srcJs + 'josh.js',
        srcJs + 'pages/minisidebar.js',
        srcJs + 'jquery-slimscroll.js',
        vendors+ 'holderjs/holder.min.js'
    ], destJs + 'app.js');

/*frontend js mix*/




