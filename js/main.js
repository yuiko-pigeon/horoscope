document.addEventListener("DOMContentLoaded", function () {
    // 対象となるIDを配列で管理
    const ids = ["progress", "natal", "synastry","errectional","nature","love","sample1","sample2","sample3"];
  
    ids.forEach(id => {
      const checkbox = document.getElementById(id);
      const button = document.querySelector(`label[for="${id}"]`);
  
      if (checkbox && button) {
        button.addEventListener("click", function () {
          setTimeout(() => {
            if (!checkbox.checked) {
              button.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }
          }, 50);
        });
      }
    });
  });