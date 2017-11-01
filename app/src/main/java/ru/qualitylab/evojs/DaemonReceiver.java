package ru.qualitylab.evojs;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
public class DaemonReceiver extends BroadcastReceiver {
@Override
public void onReceive(Context context, Intent intent) {
Log.d("!!!!", "Received " + intent.getAction());
context.startService(new Intent(intent.getAction()).setPackage(context.getPackageName()).putExtras(intent.getExtras()));
}
}
