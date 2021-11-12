/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }

    viewdetails: function(obj){
    record = obj.up('gridpanel').getSelectionModel().getLastSelected();
    console.log('record',record);
        new Ext.form.Panel({
            width: 500,
            height: 600,
            title: 'Repo Details',
            floating: true,
            closable: true,
            bodyPadding: 25,
            layout: 'anchor',
    defaults: {
        anchor: '100%'
    },


     defaultType: 'textfield',
    items: [{
          xtype: 'container',
          layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center',
          },
          items: [{
             xtype:'image',
                tag: 'img', 
                src: record.data.owner.avatar_url, 
                width: 110, 
                height:120
            }]
        },{
        fieldLabel: 'Author Name',
        allowBlank: false,
        readOnly: true,
        value: record.data.owner.login

    },{
        fieldLabel: 'Language',
        allowBlank: false,
        readOnly: true,
        value: record.data.language

    },
    {
        fieldLabel: 'Creation Date',
        allowBlank: false,
        readOnly: true,
        type: 'date',
         dateFormat: 'd-m-Y',
        value: record.data.created_at,


    },
    {
        fieldLabel: 'Last Update',
        allowBlank: false,
        type: 'date',
        readOnly: true,
        dateFormat: 'd-m-Y',
        value:record.data.updated_at,

    },
    {       
        xtype: 'button',
        tooltip: 'User Profile',
        text: 'User Profile',
        handler: function () {
            window.open(record.data.owner.html_url);
        }
    },
    {       
        xtype: 'button',
        tooltip: 'Repository',
        text: 'Users Repository',
        handler: function () {
            window.open(record.data.html_url);
        }
    },
    {       
        xtype: 'textarea',
        text: 'Users Repository',
        value: record.data.description,

    },
    ],
   
            
    }).show();
        // }
    // }
// });
    }
});
