Intro to SQL
============

## SWBATs

- Explain persistence and the need for using SQL
- Define SQL
- Explain the difference between SQLite3 and SQL
- Explore provided data through SQLite Browser
- Perform CRUD actions on a single table
- Perform CRUD actions across related tables

## Setup

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## What is SQL?


## Databases 


Relational Databases 
====================


Non-Relational Databases
====================


## Things we can do to data:


## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL

```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql

```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql

```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? artists.id **169**

```sql

```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql

```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

```sql

```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
