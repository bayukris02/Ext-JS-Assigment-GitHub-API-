/**
 * This view is an example list of people.
 */


Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
        id:'mainlist-win',
    requires: [
        'MyApp.store.Personnel'
    ],
    title: 'GitHub Repository',
    listeners : {
                    itemdblclick: 'viewdetails'
                },
    store: {
        type: 'personnel'
    },
    autoScroll: true,
    layout: 'fit',
    columns: [
        { 
            text: 'Repository Name',  
            dataIndex: 'name',
            flex: 1,
        },
        { 
            text: 'Author Name',  
            tpl: '{owner.login}',
            xtype: 'templatecolumn',
            flex: 1,
        },
        { 
            text: 'Repository Name',  
            dataIndex: 'name',
            flex: 1,
        },
        {

            header: 'Avatar', 
            // renderer: image,
            sortable: true,
            dataIndex: 'owner',
            renderer: function(owner){
                return '<img src="' + owner.avatar_url + ' width="50" height="50"">';
            }
        },
        { 
            text: 'Watchers',  
            dataIndex: 'watchers_count',
            flex: 1,
            sortable: true
        },
        { 
            text: 'Forks',  
            dataIndex: 'forks_count',
            flex: 1,
            sortable: true

        },
        { 
            text: 'Issues', 
            dataIndex: 'open_issues_count', 
            flex: 1,
            width:70,
            sortable: true

        }
    ],
    tbar: [
        'Search : ',{
            xtype: 'triggerfield',
            name:'search',
            enableKeyEvents:true,
            trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
            onTrigger1Click: function() {
               this.reset();
            },
            onTrigger2Click: function() {
                var myForm = Ext.getCmp('mainlist-win');                                       
                var cari = myForm.down('triggerfield[name=search]').getValue();
                console.log(cari);
                var store = Ext.getStore('personnel');
                store.load({
                    params: {
                        name: cari
                    },
                    callback: function(records, operation, success) {
                        store.load();
                    },
                    scope: this
                });
            },
            onKeyPress:function (a,b,c){
                if (a.getKey()==a.ENTER){
                    this.up('grid').down('triggerfield[name=search]').onTrigger2Click();
                }
            }
        }],

    // listeners: {
    //     select: 'onItemSelected'
    // }
});

