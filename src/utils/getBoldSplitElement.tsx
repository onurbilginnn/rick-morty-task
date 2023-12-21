export const getBoldSplitElement = (mainText: string, boldText: string) => {
    const textArray = mainText.split(RegExp(boldText, "ig"));
    const match = mainText.match(RegExp(boldText, "ig"));
    return <span>
    {textArray.map((item, index) => (
      <span key={index}>
        {item}
        {index !== textArray.length - 1 && match && (
          <b>{match[index]}</b>
        )}
      </span>
    ))}
  </span>
}