Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',



    proxy: {
        type: 'ajax',
        url: 'https://api.github.com/users/mathdroid/repos'
    },
    autoLoad: true
});

