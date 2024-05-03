function minDate(dates) {
    let ans = dates[0];

    for (let i = 1; i < dates.length; i++) {
        let cur = dates[i];
        let cur_y = cur.slice(0, 4);
        let cur_m = parseInt(cur.slice(5, 7));
        let cur_d = parseInt(cur.slice(8, 10));

        let prev_y = ans.slice(0, 4);
        let prev_m = parseInt(ans.slice(5, 7));
        let prev_d = parseInt(ans.slice(8, 10));

        if (cur_y < prev_y) {
            ans = cur;
        } else if (cur_y === prev_y && cur_m < prev_m) {
            ans = cur;
        } else if (cur_y === prev_y && cur_m === prev_m && cur_d < prev_d) {
            ans = cur;
        }
    }

    return ans;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
