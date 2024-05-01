/* 
1. do not show the link to them who don't right to see it.
  only show to link to the person/types of user who are eligible.
2. Do not allow to visit the link by typing on the url
*if not admin then redirect to nay other page. you could logOUt user and send them to the login page as well.

---------------------------------------------------
            TO SEND DATA
---------------------------------------
1. verify jwt token (send authorization token in the header to the server).
* if possible use axios to send jwt token by intercepting the request.
2. if it is an admin activity then make sure that only the admin is posting using verifyAdmin
            
 */