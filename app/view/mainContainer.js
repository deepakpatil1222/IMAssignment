/*
 * File: app/view/mainContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.mainContainer', {
    extend: 'Ext.container.Container',

    id: 'mainContainer',
    layout: {
        type: 'card'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    cls: 'bg_login',
                    padding: '300 500 300 500',
                    items: [
                        {
                            xtype: 'panel',
                            height: 280,
                            width: 350,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyCls: [
                                'bg_loginbox',
                                'x-panel-body-default',
                                'x-box-layout-ct',
                                'x-closable',
                                'x-panel-body-closable',
                                'x-panel-body-default-closable',
                                'backgroundColor-body-default',
                                'backgroundColor-body-closable',
                                'backgroundColor-body-default-closable'
                            ],
                            closable: true,
                            header: false,
                            title: 'Login',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 0.4,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            html: 'Login',
                                            padding: '45 0 0 5',
                                            style: 'font-size:20px;font_weight:bold;'
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            cls: 'bg_CompanyLogo'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            border: '1 0 1 0',
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    height: 10
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    id: 'txtUserName1',
                                                    fieldLabel: 'User Name'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    id: 'txtPassword1',
                                                    fieldLabel: 'Password',
                                                    inputType: 'password'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    id: 'txtRoleName1',
                                                    fieldLabel: 'Role'
                                                },
                                                {
                                                    xtype: 'tbspacer',
                                                    height: 8
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    id: 'btnLogin',
                                                    margin: '0 50 0 120',
                                                    width: 70,
                                                    text: 'Log In'
                                                },
                                                {
                                                    xtype: 'button',
                                                    id: 'btnReset',
                                                    width: 70,
                                                    text: 'Reset'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    id: 'studentContainer',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            height: 100,
                            maxHeight: 100,
                            minHeight: 100,
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnLogout',
                                    scale: 'large',
                                    text: 'Logout'
                                }
                            ]
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1,
                            height: 10,
                            maxHeight: 10,
                            minHeight: 10
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        type: 'fit'
                                    },
                                    items: [
                                        {
                                            xtype: 'treepanel',
                                            id: 'classTree',
                                            title: 'Classes',
                                            store: 'ClassTreeStore',
                                            viewConfig: {

                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1,
                                    maxWidth: 10,
                                    minWidth: 10,
                                    width: 10
                                },
                                {
                                    xtype: 'container',
                                    flex: 3,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            layout: {
                                                type: 'fit'
                                            },
                                            items: [
                                                {
                                                    xtype: 'gridpanel',
                                                    height: 300,
                                                    id: 'studentDataGrid',
                                                    maxHeight: 300,
                                                    minHeight: 300,
                                                    autoScroll: true,
                                                    title: 'Students Data',
                                                    store: 'ClassJsonStore',
                                                    columns: [
                                                        {
                                                            xtype: 'gridcolumn',
                                                            maxWidth: 90,
                                                            minWidth: 70,
                                                            width: 90,
                                                            align: 'center',
                                                            dataIndex: 'Roll_No',
                                                            text: 'Roll No'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            maxWidth: 300,
                                                            minWidth: 300,
                                                            width: 300,
                                                            dataIndex: 'string',
                                                            text: 'Name',
                                                            columns: [
                                                                {
                                                                    xtype: 'gridcolumn',
                                                                    maxWidth: 150,
                                                                    minWidth: 150,
                                                                    width: 150,
                                                                    dataIndex: 'FName',
                                                                    text: 'First Name'
                                                                },
                                                                {
                                                                    xtype: 'gridcolumn',
                                                                    maxWidth: 150,
                                                                    minWidth: 150,
                                                                    width: 150,
                                                                    dataIndex: 'LName',
                                                                    text: 'Last Name'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            maxWidth: 120,
                                                            minWidth: 120,
                                                            width: 120,
                                                            align: 'center',
                                                            dataIndex: 'Tel_No',
                                                            text: 'Telephone Number'
                                                        },
                                                        {
                                                            xtype: 'datecolumn',
                                                            maxWidth: 120,
                                                            minWidth: 120,
                                                            width: 120,
                                                            align: 'center',
                                                            dataIndex: 'DOB',
                                                            text: 'Date Of Birth'
                                                        },
                                                        {
                                                            xtype: 'datecolumn',
                                                            maxWidth: 120,
                                                            minWidth: 120,
                                                            width: 120,
                                                            align: 'center',
                                                            dataIndex: 'DOA',
                                                            text: 'Date Of Admission'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            maxWidth: 120,
                                                            minWidth: 120,
                                                            width: 120,
                                                            dataIndex: 'Address',
                                                            text: 'Address'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            maxWidth: 120,
                                                            minWidth: 120,
                                                            width: 120,
                                                            align: 'center',
                                                            dataIndex: 'Pin_Code',
                                                            text: 'Pin Code'
                                                        }
                                                    ],
                                                    selModel: Ext.create('Ext.selection.RowModel', {

                                                    })
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'tbspacer',
                                            flex: 1,
                                            height: 10,
                                            maxHeight: 10,
                                            minHeight: 10
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            layout: {
                                                type: 'fit'
                                            },
                                            items: [
                                                {
                                                    xtype: 'form',
                                                    id: 'frmStudentDetails',
                                                    layout: {
                                                        align: 'stretch',
                                                        type: 'hbox'
                                                    },
                                                    bodyPadding: 10,
                                                    title: 'Student Details',
                                                    items: [
                                                        {
                                                            xtype: 'fieldset',
                                                            flex: 1,
                                                            padding: 20,
                                                            title: 'Personal',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'First Name',
                                                                    name: 'FName',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Last Name',
                                                                    name: 'LName',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Telephone Number',
                                                                    name: 'Tel_No',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Date Of Birth',
                                                                    name: 'DOB',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Address',
                                                                    name: 'Address',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Pin Code',
                                                                    name: 'Pin_Code',
                                                                    readOnly: true
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'fieldset',
                                                            flex: 1,
                                                            padding: 20,
                                                            title: 'Office Use',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Roll No',
                                                                    name: 'Roll_No',
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    anchor: '100%',
                                                                    fieldLabel: 'Date Of Admission',
                                                                    name: 'DOA',
                                                                    readOnly: true
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});