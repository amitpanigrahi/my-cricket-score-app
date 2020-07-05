# MyCricketScore

My Cricket Score App is a simple player average score analyser app.
  - Enter the country name
  - See the average and progress
  - Magic

# Features!

Data Source:
  - This app will work both with test source data and server sourced data.
  - The data from the server needed to be modified to Array of Objects from Array of array response to match the format of the test data and to keep the source of the platform uniform.

# App usage:
    Average:
        - User can enter country name and if it is available in the source data, the average will be calculated and displayed under the average label.
        - If data is not available for that particular country then, average will be shown as "-";
    Progress Bar:
        - The progress percentage is calculated on basis of the average against the country and total average.
        - If there is a positive percentage then a blue colored progress bar will be shown in propertion to the total width of the bar.


Additional:
  - User can add as many rows with the addition (+) button provided at the bottom.
  - Default rows are set to 2.
  - User can remove (n - 1)rows, where n = total no. of rows;
  - Some simple yet gentle CSS used to keep the application in a fresh look.

### Installation

Install the dependencies and start the server.

```sh
$ yarn install
$ yarn start
```

### Todos

 - Introducing material UI. Not required at this stage.
 - Showing list of all the countries available.
 - Improving overall look and feel.
 - Adding Night Mode

License
----

MIT

**Free Software, Hell Yeah!**
