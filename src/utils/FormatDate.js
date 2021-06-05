export const getFormatDate = (date) => {
    let month = 1 + date.getMonth();
    let day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    let showingDate = month + "월 " + day + "일";
    return showingDate;
  }

