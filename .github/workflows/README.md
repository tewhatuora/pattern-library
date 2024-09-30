## Porting from Gitlab CI notes

### Github workflow limitations
  * Still figuring out a good way to combine parallel jobs with multiple jobs waiting on a common earlier job. Gitlab CI does this well with stages. Github workflows can call other workflows, but it is pretty linear.
  * Github globbing is very limited in both power and applicability (ie only available in 'on:' triggers). No regex functionality anywhere - need to rely on shelling out.

### Still to figure out
  * How to prevent the build workflow running multiple times and creating multiple artifacts. This can also create warnings during caching saving.
    * This might need to have the build workflow get triggered first then call the other steps afterwards.