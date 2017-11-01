package ru.qualitylab.evojs;
import android.content.Intent;; 
import android.os.Bundle; 
import android.os.RemoteException; 
import java.util.HashMap; 
import java.util.Map; 
import ru.evotor.framework.core.IntegrationService; 
import ru.evotor.framework.core.action.processor.ActionProcessor; 
public class WORLD_SALES_VIEW_SERVICE extends IntegrationService {
protected Map<String, ActionProcessor> createProcessors() { 
Map<String, ActionProcessor> processorsMap = new HashMap<>(); 
processorsMap.put("evo.v2.receipt.sell.receiptDiscount", new ActionProcessor() {
@Override 
public void process(String s, Bundle bundle, Callback callback) {
try {
callback.startActivity(new Intent(getApplicationContext(), WORLD_SALES_VIEW.class));
}
catch (RemoteException e) {
e.printStackTrace();
}
}
});
 return processorsMap;
}
}
