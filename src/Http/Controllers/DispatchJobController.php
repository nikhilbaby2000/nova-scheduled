<?php

namespace Nick\NovaScheduledJobs\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Nick\NovaScheduledJobs\Rules\JobExist;

class DispatchJobController
{
    /**
     * Dispatch job command.
     *
     * @param  \Illuminate\Http\Request $request
     */
    public function create(Request $request)
    {
        $command = array_first(explode(' ', $request->get('command')));

        if (in_array($command, array_keys(Artisan::all()))) {
            return exec("nohup php {$_SERVER['DOCUMENT_ROOT']}/../artisan {$command}");
        }

        $data = $request->validate([
            'command' => ['required', 'string', new JobExist]
        ]);

        $command = resolve($data['command']);

        dispatch($command);
    }
}
