# Waterline ORM

  ### Application

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `application` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | owner | `User` |  |  |   
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### CnectPermission

  Base object from which all Cnect objects inherit

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `pub_security_md` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `false` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | id | `integer` | security_id |  |   
  | role | `CnectRole` | rolename |  |   
  | view | `View` | viewname |  |   
  | application | `Application` |  |  |   
  | folder | `string` |  |  |   
  | insert | `boolean` | insert_permission |  |   
  | update | `boolean` | update_permission |  |   
  | delete | `boolean` | delete_permission |  |   
  | createdAt | `` | created_dt |  |   
  | updatedAt | `` | updated_dt |  |   
  | owner | `User` |  |  |   


  ### CnectRole

  Base object from which all Cnect objects inherit

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `pub_security_role_md` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | createdAt | `` | created_dt |  |   
  | updatedAt | `` | updated_dt |  |   
  | owner | `User` |  |  |   
  | id | `integer` |  |  |   


  ### CnectUser

  Base object from which all Cnect objects inherit

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `pub_security_users_md` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `false` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | id | `integer` | security_user_id |  |   
  | username | `string` |  |  |   
  | role | `CnectRole` | rolename |  |   
  | createdAt | `` | created_dt |  |   
  | updatedAt | `` | updated_dt |  |   
  | owner | `User` |  |  |   


  ### Model

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `model` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | name | `string` |  |  |   
  | identity | `string` |  |  |   
  | attributes | `json` |  |  |   
  | permissions | `Permission` |  |  |   
  | id | `integer` |  |  |   


  ### Passport

  

  | config | value |
  |:---|:---|
  | rest? | `false` |
  | table | `passport` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | protocol | `alphanumeric` |  |  |   
  | password | `string` |  |  |   
  | provider | `alphanumericdashed` |  |  |   
  | identifier | `string` |  |  |   
  | tokens | `json` |  |  |   
  | user | `User` |  |  |   
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### Permission

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `permission` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | model | `Model` |  |  |   
  | role | `Role` |  |  |   
  | grant | `json` |  |  |   
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### Role

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `role` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | name | `string` |  |  |   
  | children | `Role` |  |  |   
  | parent | `Role` |  |  |   
  | users | `User` |  |  |   
  | active | `boolean` |  |  |   
  | permissions | `Permission` |  |  |   
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### User

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `user` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | username | `string` |  |  |   
  | email | `email` |  |  |   
  | passports | `Passport` |  |  |   
  | roles | `Role` |  |  |   
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### View

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `sec_view_role_users` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `false` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | name | `string` | vw_name |  |   
  | category | `ViewCategory` | app_category |  |   
  | role | `string` | role_name |  |   
  | owner | `User` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### ViewCategory

  

  | config | value |
  |:---|:---|
  | rest? | `true` |
  | table | `cfg_application_category` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `false` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | category | `integer` | app_category |  |   
  | description | `string` | app_desc |  |   
  | parent | `ViewCategory` | parent_app_category |  |   
  | subcategories | `ViewCategory` |  |  |   
  | views | `View` |  |  |   
  | owner | `User` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   


  ### CnectObject

  Base object from which all Cnect objects inherit

  | config | value |
  |:---|:---|
  | rest? | `false` |
  | table | `cnectobject` |
  | connection | `cnect-central` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | createdAt | `` | created_dt |  |   
  | updatedAt | `` | updated_dt |  |   
  | owner | `User` |  |  |   
  | id | `integer` |  |  |   


  ### HasTimestamps

  

  | config | value |
  |:---|:---|
  | rest? | `false` |
  | table | `hastimestamps` |
  | connection | `cnect-configurator` |
  | extends | `` |
  | autoPK | `true` |

  | attribute | type | column | description |
  |:---|:---|:---|:---|
  
  | id | `integer` |  |  |   
  | createdAt | `datetime` |  |  |   
  | updatedAt | `datetime` |  |  |   



Documentation generated by [sails-docgen](https://github.com/cnect/sails-docgen)