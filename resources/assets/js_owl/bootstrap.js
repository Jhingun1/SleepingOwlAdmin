import Admin from './components/admin';

window._ = require('lodash');

window.Admin = new Admin(
    document.querySelector(`meta[name="csrf-token"]`).getAttribute('content'),
    window.GlobalConfig || {},
);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//
require('./libs/select2');
require('./libs/noty');

require('./libs/jquery');
require('./libs/jquery-form');
require('./libs/moment');
require('./libs/bootstrap');
require('./libs/i18next');
require('./libs/bootstrap-datepicker');
require('./libs/datetimepicker');
require('./libs/magnific-popup');
require('./libs/dropzone');
require('./libs/datatables');
require('./libs/xeditable');
require('./libs/nestable');
require('./libs/sweetalert');
require('./libs/dependent-dropdown');
require('./libs/js-cookie');
require('./libs/progressbar');

require('./libs/vuejs');
require('./libs/noty');

require('./custom/vuex')
/**
 * Best open source admin dashboard & control panel theme.
 * Built on top of Bootstrap 3, AdminLTE provides a range of
 * responsive, reusable, and commonly used components.
 *
 * @see https://almsaeedstudio.com/preview
 */
require('admin-lte');


window.Admin.Events = require('./components/events');

window.Admin.Messages = require('./components/messages');
window.Admin.Storage = require('./components/storage');
window.Admin.Asset = require('./components/asset');
window.Admin.Modules = require('./components/modules');
window.Admin.WYSIWYG = require('./components/wysiwyg');

/**
 * Initialize Wysiwyg editors
 */
require('./wysiwyg/ckeditor');
require('./wysiwyg/ckeditor5');
require('./wysiwyg/simplemde');
require('./wysiwyg/tinymce');
require('./wysiwyg/summernote');

/**
 * Initialize App
 */

/**
 * Initialize display
 */
require('./admin/display/datatables');

require('./admin/display/actions');
require('./admin/display/actions_form');
require('./admin/display/treeview');
require('./admin/display/columns/checkbox');
require('./admin/display/columns/control');
require('./admin/display/columns/tree_control');
require('./admin/display/columns/inline_edit');

/**
 * Initialize form
 */
 require('./admin/form/date');
 require('./admin/form/datetime');

//OLD need test
require('./admin/form/buttons');
require('./admin/form/select');
require('./admin/form/selectajax');
require('./admin/form/dependent-select');
require('./admin/form/deselect');
require('./admin/display/env_editor');
require('./admin/form/file');
require('./admin/form/files');
require('./admin/form/image');
require('./admin/form/images');
require('./admin/events');
require('./admin/form/related');
